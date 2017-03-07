# PalmSprings - a mobile app prototyping sandbox for Arches

To get started, make sure you've got [Cordova](Cordova Getting Started Guide) and XCode installed.

to get started:
```
cordova platform remove ios
cordova platform add ios --save
cordova plugin add cordova-plugin-sqlite
bower install
npm install -g cdvlive #needed for livereload
```

to run:
```
cordova run ios --target="iPhone-7, 10.2"
```
or
```
cdvlive ip #set your ip
cdvlive ios #run with livereload
```

If you are having build errors, try to remove and re-add your platform:
```
cordova platform rm ios
cordova platform add ios --save
```

Let's do this...!
