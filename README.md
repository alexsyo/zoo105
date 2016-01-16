# Zoo105

<dl>
    <dd>Fetch and play audio files from an API.</dd>
    <dd>Mobile app written in react and es2015</dd>
</dl>

## Requirements

Run:
 * npm intall -g bower gulp phonegap

## Prepare

Run:
 * npm install
 * bower install
 * phongap create dist
    
## Test

<dl>
    <dd>Require the Chrome extension 'Ripple Emulator'</dd>
    <dd>Run:</dd>
</dl>
 * gulp

## Build

Run:
 * gulp build
 * phonegap remote login (require an Adobe or build.phongap account)
 * phonegap remote build android

Download the .apk file from build.phonegap.com

## Phonegap

| Action | Command |
|--------|---------|
| create app | phonegap create dist com.example.test test |
| install plugins | config.xml |
| login | phonegap remote login |
| build | phonegap remote build android |