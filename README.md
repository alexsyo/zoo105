# Zoo105

<dl>
    <dt>Work in progress</dt>
    <dd>ToDo:<dd>
        1. optimize css and foundation classes on large, medium and old android system
        2. change slider style
        3. change button style (gradient)
</dl>

## Description

<dl>
    <dd>Fetch and play audio files from an API.</dd>
    <dd>Mobile app written in react and es2015</dd>
</dl>

## Requirements

npm, bower, gulp, phonegap

## Build

<dl>
    <dd>npm install</dd>
    <dd>bower install</dd>
    <dd>phongap create dist</dd>
    <dd>gulp</dd>
    <dd>phonegap remote login (require an Adobe or build.phongap account )</dd>
    <dd>phonegap remote build android </dd>
    <dd>download .apk file from build.phonegap</dd>
</dl>

## Phonegap

| Action | Command |
|--------|---------|
| create app | phonegap create dist com.example.test test |
| install plugins | config.xml |
| login | phonegap remote login |
| build | phonegap remote build android |