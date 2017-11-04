import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import {CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions} from "@ionic-native/camera-preview";
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController,
                public toastCtrl: ToastController,
                public diagnostic:Diagnostic,
                public cameraPreview: CameraPreview,
                public http: HttpClient) {

        this.initializePreview()
    }
    checkPermissions(){
        this.diagnostic.isCameraAuthorized().then((authorized) =>{
            if(authorized)
                this.initializePreview();
            else {
                this.diagnostic.requestCameraAuthorization().then((status) =>{
                    if(status == this.diagnostic.permissionStatus.GRANTED)
                        this.initializePreview();
                    else {
                        this.toastCtrl.create({
                            message: "Cannot access camera",
                            position: "bottom",
                            duration: 5000
                        }).present()
                    }
                });
            }
        })
    }
    initializePreview(){
        let previewRect: CameraPreviewOptions = {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            camera: 'rear',
            tapPhoto: true,
            previewDrag: true,
            toBack: true,
            alpha: 1
        }
        var that = this;
        this.cameraPreview.startCamera(previewRect).then(function(){
        }, function(error){
            console.log('error', error);

        })

    }
    takePicture(){
        const pictureOpts: CameraPreviewPictureOptions = {
            width: 500,
            height: 500,
            quality: 50
        }
        this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
            console.log(imageData.toString('base64'))
            console.log("-------------------------------------------------------------------------------------")
            console.log(encodeURIComponent(imageData.toString('base64')))
            let body = {
                img: encodeURIComponent(imageData.toString('base64'))
            }
            let headers = new Headers();
            headers.append('Content-Type', 'application/json')
            console.log("Entered")
            this.http.post("http://192.168.137.137:3000/recognition", {img: "abc"})
                .subscribe(data => {
                    console.log(data)
                }, error => {
                    console.log(error)
                });

        }, (err) => {
            console.log(err)
        });
    }

}