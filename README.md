# sendbird-demo
This is full screen chat sample like Slack using the Sendbird SDK for desktop browsers.
- [sendbird-demo](#sendbird-demo)
  - [Demo](#demo)
  - [Run the sample](#run-the-sample)
  - [Customizing the sample](#customizing-the-sample)

## [Demo](http://sendbird.writso.com)
You can try out a live demo from the link [here](http://sendbird.writso.com).


## Run the sample
1. Install packages

> Require that you have Node v8.x+ installed. 

```bash
npm install
```

2. Run

```bash
npm start
```

## Customizing the sample
If you want to put some changes into the sample, you should build it using `webpack`.  

1. Install packages

> Require that you have Node v8.x+ installed. 

```bash
npm install
``` 

2. Modify files
If you want to change `APP_ID`, change `APP_ID` in const.js to the other `APP_ID` you want.  
You can test the sample with local server by running the following command.  

```bash
npm run start
``` 

3. Build the sample
When the modification is complete, you'll need to bundle the file using `webpack`. The bundled files are created in the `dist` folder.  
Please check `webpack.config.js` for settings.    

```bash
npm run build
```

> The `npm start` command contains `npm run build`. Check the scripts part of the package.json file.
