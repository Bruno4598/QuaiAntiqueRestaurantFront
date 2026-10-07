export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[]  -> Tout le monde peut y acceder
[disconnected] -> Seulement les utilisateurs non connectés peuvent y acceder
[client] -> Seulement les clients peuvent y acceder
[admin] -> Seulement les admin peuvent y acceder
[admin, client] -> Seulement les admin et les clients peuvent y acceder
*/