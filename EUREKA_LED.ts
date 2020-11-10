enum eureka_IO {
  Aﾎﾟｰﾄ,
  Bﾎﾟｰﾄ,
  Cﾎﾟｰﾄ,
}
enum eureka_tlp {
  Aﾎﾟｰﾄ,
  Bﾎﾟｰﾄ,
}
enum onoff {
  ON,
  OFF,
}

enum LED_onoff {
    しない=0,
    ゆっくり=2000,
    ふつう=1000,
    はやく=500,
}
enum LED_color {
    赤,
    オレンジ,
    き色,
    みどり,
    水色,
    青,
    むらさき,
}

//% color="#ff7b00" block="はじめの一歩　V0.90"
namespace natumi_blocks {

    //% blockId=eureka_buz_set 
    //% block=ﾕｰﾚｶIOﾎﾞｯｸｽで音をならす
    // group="1 初期設定"
    //% color="#ff3d03" 
    //% weight=59

    export function eureka_buz_set() {
    pins.analogSetPitchPin(AnalogPin.P8);
  }


    //% color="#858585" weight=54 blockId=eureka_tl_blue block="にじ色ＬＥＤ |%color|色で点めつは|%mode| ﾎﾟｰﾄ|%pin|" group="2_信号機ユニット"
    export function eureka_tl_blue(color:LED_color, mode:LED_onoff, pin: eureka_tlp) {
    switch (color) {
        case LED_color.赤:
        pins.digitalWritePin(DigitalPin.P0, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        basic.pause(mode);
        return
        }
        case LED_color.オレンジ:
        pins.digitalWritePin(DigitalPin.P14, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        }
        case LED_color.き色:
        pins.digitalWritePin(DigitalPin.P14, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        }
            case LED_color.みどり:
        pins.digitalWritePin(DigitalPin.P14, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        }
            case LED_color.水色:
        pins.digitalWritePin(DigitalPin.P14, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        }
            case LED_color.青:
        pins.digitalWritePin(DigitalPin.P14, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        }
            case LED_color.むらさき:
        pins.digitalWritePin(DigitalPin.P14, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        }
    }
    }

  //% color="#1E90FF" weight=10 block="待ち時間（秒）|%second|" group="機能"
  //% second.min=0 second.max=10
  export function driveForwards(second: number): void {
    basic.pause(second * 1000);
    }
}
