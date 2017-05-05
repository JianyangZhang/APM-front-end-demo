/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

interface JQuery {
    popup(options?: any): JQuery;
    modal(options?: any): JQuery;
	dropdown(options?: any): JQuery;
	tab(options?: any): JQuery;
	checkbox(options?: any): JQuery;
	progress(options?: any): JQuery;
}