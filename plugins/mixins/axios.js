export default function ({ $axios, store, app}){

    $axios.onError(error => {

        if (error){
            if (error.response.status === 422) {
                store.dispatch('validation/setErrors', error.response.data.errors ? error.response.data.errors : null)

                let messageData1 = {'text': error.response.data.message, 'target': null, 'type': 'error', 'time': null}

                store.dispatch('message/setMessage', messageData1)
                
            }
            if (error.response.status === 400) {
                store.dispatch('validation/setErrors', error.response.data.errors ? error.response.data.errors : null)

                let messageData2 = {'text': error.response.data.message, 'target': null, 'type': 'info', 'time': null}

                store.dispatch('message/setMessage', messageData2)
               
            }

            if (error.response.status === 401) {

                let messageData3 = {'text': "You're not logged in", 'target': null, 'type': 'danger', 'time': null}

                store.dispatch('message/setMessage', messageData3)

                this.$router.push(`/login`)
               
            }
    }
        return Promise.reject(error)
    })

    $axios.onRequest(() => {
        store.dispatch('validation/clearErrors')
        store.dispatch('message/clearMessage')
    })

    $axios.onResponse(response => {
        if (response){
            if (response.status === 200) {
                if (response.data.message)
                {
                    let messageData3 = {'text': response.data.message, 'target': null, 'type': 'success', 'time': null}
                    store.dispatch('message/setMessage', messageData3)

                    if( response.config.method === 'post' ||  response.config.method === 'delete'){
                        app.$notify({
                            group: 'all',
                            title: 'Important message',
                            text: response.data.message,
                            type: 'success',
                            duration: 15000,
                        })
                    }
                }
            }
        }
        return Promise.resolve(response)
    })
}