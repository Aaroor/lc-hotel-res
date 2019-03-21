#FIREBASE AUTHENTICATION STEPS

#Install firebase for Angular 7
    - npm install --save firebase @angular/fire
#Go to firebase console
    - create new project
    - Add Firebase to your web app (Environment.ts)

#Add firebase module to app module
    import {environment} from '../environments/environment';
        -inside import
            import {AngularFireModule} from '@angular/fire';
            AngularFireModule.initializeApp(environment.firebase)
            import {AngularFireAuthModule} from '@angular/fire/auth';
            AngularFireAuthModule
    
    Refrence : https://www.youtube.com/watch?v=6TRv1xT3Y-E

    All Logins : https://itnext.io/step-by-step-complete-firebase-authentication-in-angular-2-97ca73b8eb32

    HTTP SERVICE HANDLE : https://www.youtube.com/watch?v=fh2GyYQcuxU
           
