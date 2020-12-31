export default function auth ({ next, router }){
    var user = JSON.parse(localStorage.getItem('CurrentUser'));
    let role = user['role'][0]['name']
    if(!role == 'admin')
    {
      return router.push({name : 'login'})
    }


    return next()

}
