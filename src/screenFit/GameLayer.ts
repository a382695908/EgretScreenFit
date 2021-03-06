/**
 * Created by Saco on 2015/1/6.
 */
module slib
{
    export class GameLayer
    {
        /*游戏背景层*/
        public static LAYER_BG:string = "layer_bg";
        /*游戏层*/
        public static LAYER_GAME:string = "layer_game";
        /*游戏UI界面层*/
        public static LAYER_UI:string = "layer_ui";
        /*弹出面本层*/
        public static LAYER_PANEL:string = "layer_panel";
        /*游戏提示层*/
        public static LAYER_TIPS:string = "layer_tips";
        private _layers:any;

        public constructor()
        {
            this._layers = {};
        }

        public getLayer(layerType:string):DisplayObjectContainer
        {
            if (this._layers.layerType)
                return this._layers.layerType;

            var layer:DisplayObjectContainer = new DisplayObjectContainer();
            this._layers.layerType = layer;
            return layer;
        }
    }
}
