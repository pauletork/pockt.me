import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  constructor() { }

  public loadScript(arr) {
    const dynamicScripts = arr;
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      let body = document.getElementsByTagName('body')[0];
      body.appendChild(node);
    }
    setTimeout(() => {
      console.clear();
    }, 1500);
  }

  public loadLogin() {
    let loginScripts = [
      "assets/js/login.js",
      "assets/vendor/jquery-validation/dist/jquery.validate.min.js",
      "assets/vendor/slick-carousel/slick/slick.js",
      "assets/js/hs.core.js",
      "assets/js/components/hs.validation.js",
      "assets/js/components/hs.slick-carousel.js",
      "assets/js/login.js"
    ];
    this.loadScript(loginScripts);
  }

  public privacyPolicy() {
    let scripts = [
      "assets/vendor/hs-megamenu/src/hs.megamenu.js",
      "assets/vendor/svg-injector/dist/svg-injector.min.js",
      "assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js",
      "assets/vendor/jquery-validation/dist/jquery.validate.min.js",
      "assets/js/hs.core.js",
      "assets/js/components/hs.header.js",
      "assets/js/components/hs.unfold.js",
      "assets/js/components/hs.malihu-scrollbar.js",
      "assets/js/components/hs.validation.js",
      "assets/js/components/hs.focus-state.js",
      "assets/js/components/hs.show-animation.js",
      "assets/js/components/hs.svg-injector.js",
      "assets/js/components/hs.go-to.js",
      "assets/js/privacy.js"
    ];
    this.loadScript(scripts);
  }

  public dashboardLoader() {
    let script = [
      "assets/vendor/hs-megamenu/src/hs.megamenu.js",
      "assets/vendor/svg-injector/dist/svg-injector.min.js",
      "assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js",
      "assets/vendor/jquery-validation/dist/jquery.validate.min.js",
      "assets/vendor/custombox/dist/custombox.min.js",
      "assets/vendor/custombox/dist/custombox.legacy.min.js",
      "assets/vendor/flatpickr/dist/flatpickr.min.js",
      "assets/vendor/appear.js",
      "assets/vendor/circles/circles.min.js",
      "assets/js/hs.core.js",
      "assets/js/components/hs.header.js",
      "assets/js/components/hs.unfold.js",
      "assets/js/components/hs.malihu-scrollbar.js",
      "assets/js/components/hs.focus-state.js",
      "assets/js/components/hs.validation.js",
      "assets/js/components/hs.modal-window.js",
      "assets/js/components/hs.step-form.js",
      "assets/js/components/hs.show-animation.js",
      "assets/js/components/hs.range-datepicker.js",
      "assets/js/components/hs.chart-pie.js",
      "assets/js/components/hs.progress-bar.js",
      "assets/js/components/hs.svg-injector.js",
      "assets/js/components/hs.go-to.js",
      "assets/js/dash.js",
    ];
    this.loadScript(script);
  }

  public activityLoader() {
    let script = [
      "assets/vendor/hs-megamenu/src/hs.megamenu.js",
      "assets/vendor/svg-injector/dist/svg-injector.min.js",
      "assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js",
      "assets/vendor/datatables/media/js/jquery.dataTables.min.js",
      "assets/vendor/flatpickr/dist/flatpickr.min.js",
      "assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js",
      "assets/js/hs.core.js",
      "assets/js/components/hs.header.js",
      "assets/js/components/hs.unfold.js",
      "assets/js/components/hs.malihu-scrollbar.js",
      "assets/js/components/hs.focus-state.js",
      "assets/js/components/hs.range-datepicker.js",
      "assets/js/components/hs.selectpicker.js",
      "assets/js/components/hs.datatables.js",
      "assets/js/components/hs.svg-injector.js",
      "assets/js/components/hs.go-to.js",
      "assets/js/activity.js",
    ];
    this.loadScript(script);
  }

  public editLoader() {
    let script = [
      "assets/vendor/hs-megamenu/src/hs.megamenu.js",
      "assets/vendor/svg-injector/dist/svg-injector.min.js",
      "assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js",
      "assets/vendor/jquery-validation/dist/jquery.validate.min.js",
      "assets/vendor/summernote/dist/summernote-lite.js",
      "assets/vendor/bootstrap-tagsinput/js/bootstrap-tagsinput.min.js",
      "assets/vendor/flatpickr/dist/flatpickr.min.js",
      "assets/js/hs.core.js",
      "assets/js/components/hs.header.js",
      "assets/js/components/hs.unfold.js",
      "assets/js/components/hs.malihu-scrollbar.js",
      "assets/js/components/hs.focus-state.js",
      "assets/js/components/hs.validation.js",
      "assets/js/components/hs.summernote-editor.js",
      "assets/js/components/hs.range-datepicker.js",
      "assets/js/components/hs.svg-injector.js",
      "assets/js/components/hs.go-to.js",
      "assets/js/edit.js",
    ]
    this.loadScript(script);
  }
}
