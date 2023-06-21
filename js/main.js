import { startWidget } from './modules/widgetService.js';

const init = async (app) => {
  const widget = await startWidget();

  app.append(widget)

};


init(document.querySelector('#app'));