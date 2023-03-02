Steps to develope Fullstack application using angular and spring bootstrapModule





8.Navigate to welcome page from login page
    a.On entering the correct credentials and clicking login.It should navigate to welcome page
    b.we are using router(from the angular/router package) object as a dependency (which is a default feature of angular) for this purpose.
    c.In order to create a router object,define router in constructor(login.component.ts line 18) which will make the object available as a member variable.
    d.Use this.router.navigate(['path']) in the handleLogin method and set the path as 'welcome'k

9.Pass the url parameter(username) to the page and console
    

10.