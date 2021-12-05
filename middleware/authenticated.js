export default async function({ $auth, redirect }) {
    const user = await $auth.loggedIn;
    if (user) {
      // let the user see the page
    } else {
      // redirect to homepage
      redirect("/login");
    }
}