# Zoo105

<dl>
    <dd>Fetch and play audio files from an API.</dd>
    <dd>Mobile app written in react and es2015</dd>
</dl>

###Example
 - Item 1
 - Item 2
  - Sub Item 1
  - Sub Item 2

  ###Example
* Item 1
* Item 2
  * Sub Item 1
  * Sub Item 2


## Requirements

<dl>
    <dd>Run:</dd>
    <dl>
        <dd>    npm intall -g bower gulp phonegap</dd>
    </dl>
</dl>

## Prepare

<dl>
    <dd>Run:</dd>
    <dl>
        <dd>    npm install</dd>
        <dd>    bower install</dd>
        <dd>    phongap create dist</dd>
    </dl>
</dl>

## Test

<dl>
    <dd>Require the Chrome extension Ripple Emulator</dd>
    <dd>Run:</dd>
    <dl>
        <dd>    gulp</dd>
    </dl>
</dl>

## Build

<dl>
    <dd>Run:</dd>
    <dl>
        <dd>    gulp build</dd>
        <dd>    phonegap remote login (require an Adobe or build.phongap account)</dd>
        <dd>    phonegap remote build android </dd>
    </dl>
    <dd>Download the .apk file from build.phonegap.com</dd>
</dl>

## Phonegap

| Action | Command |
|--------|---------|
| create app | phonegap create dist com.example.test test |
| install plugins | config.xml |
| login | phonegap remote login |
| build | phonegap remote build android |