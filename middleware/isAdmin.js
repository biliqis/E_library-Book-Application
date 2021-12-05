export default function({ store, redirect, $auth }) {
    // If the user is not authenticated
  
    let authUser = $auth.user;
    if (authUser) {
        if (!authUser) {
    
            if(authUser.user.role === !'admin'){
            return redirect("/dashboard");
            }
        }
    }
}
  