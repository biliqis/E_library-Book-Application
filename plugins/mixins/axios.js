export default function ({ $axios, store, app}){

    $axios.onError(error => {

        if (error){
            if (error.response.status === 422) {
                store.dispatch('validation/setErrors', error.response.data.errors ? error.response.data.errors : null)

                let messageData1 = {'text': error.response.data.message, 'target': null, 'type': 'error', 'time': null}

                store.dispatch('message/setMessage', messageData1)
                
            }
            if (error.response.status === 400) {
                console.log("kmk", error.response.data.message)
                let errors = {
                    'other_error' : [error.response.data.message]
                }
                store.dispatch('validation/setErrors', errors ? errors : null)
                app.$notify({
                    group: 'auth',
                    title: 'Important message',
                    text: error.response.data.message,
                    type: 'success',
                    duration: 15000,
                })

                let messageData2 = {'text': error.response.data.message, 'target': null, 'type': 'info', 'time': null}

                store.dispatch('message/setMessage', messageData2)
               
            }



            if (error.response.status === 404) {
                let errors = {
                    'general_error' : [error.response.data.message]
                }
                store.dispatch('validation/setErrors', errors ? errors : null)
                app.$notify({
                    group: 'auth',
                    title: 'Important message',
                    text: error.response.data.message,
                    type: 'success',
                    duration: 15000,
                })

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
                    console.log("bfbgg", response)
                    store.dispatch('message/setMessage', messageData3)

                    if( response.config.method === 'post' ||  response.config.method === 'delete'){
                        app.$notify({
                            group: 'auth',
                            title: 'Important message',
                            text: response.data.message,
                            type: 'success',
                            duration: 2000,
                        })
                    }
                }
            }
        }
        return Promise.resolve(response)
    })
}