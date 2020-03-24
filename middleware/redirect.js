export default function (context) {
    if (context.app.$cookies.get('login_cookie')) {
        console.log(context)
        // context.redirect('/')
    } else {
        // context.redirect('/lp')
    }
}