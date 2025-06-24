//=============================================================================
// HopelessBench.js
//=============================================================================

/*:ja
 * @plugindesc ver1.00ベンチを温めるためのプラグインです。
 * @author まっつＵＰ
 * 
 * @param rate
 * @desc 控えメンバーの経験値の所得率(50なら半分)
 * @default 100
 *
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * パラメータrateで控えメンバーの成長を妨げましょう！！！
 *  
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function() {
    
    var parameters = PluginManager.parameters('HopelessBench');
    var HBrate = Number(parameters['rate'] || 100);
    
    Game_Actor.prototype.benchMembersExpRate = function() {
    var h = HBrate / 100; //計算できる形式に変換する
    if(h < 0) h = 0; //0に満たない場合は所得経験値なし
    return $dataSystem.optExtraExp ? h : 0;
　　};
      
})();
