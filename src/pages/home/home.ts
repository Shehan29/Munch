import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import {CameraPreview, CameraPreviewOptions} from "@ionic-native/camera-preview";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public diagnostic:Diagnostic,
              public cameraPreview: CameraPreview) {

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
            that.toastCtrl.create({
                message: "Starting Camera: OK",
                position: "bottom",
                duration: 50000
            }).present();
            }, function(error){
                console.log('error', error);

        })

    }

}
