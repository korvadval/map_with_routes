import React, { Component } from 'react';
import { map } from 'underscore'

// Components
import { Section } from '../../../../components/Section'

import ImgSlider from '../../../../components/Slider/ImgSlider'

import './mobile.scss';

// Icons by paragraph
import MiniWay    from '../../../../images/mobile_app/icons/way.png'
import MiniSelect       from '../../../../images/mobile_app/icons/select.png'
import MiniSos   from '../../../../images/mobile_app/icons/sos.png'
import MiniMarkers   from '../../../../images/mobile_app/icons/markers.png'

// Screens by slider
import ScreenImg1    from '../../../../images/mobile_app/screen/1.png'
import ScreenImg2    from '../../../../images/mobile_app/screen/2.png'
import ScreenImg3    from '../../../../images/mobile_app/screen/3.png'
import ScreenImg4    from '../../../../images/mobile_app/screen/4.png'
import ScreenImg5    from '../../../../images/mobile_app/screen/5.png'
import ScreenImg6    from '../../../../images/mobile_app/screen/6.png'
import ScreenImg7    from '../../../../images/mobile_app/screen/7.png'

import AppleStoreImg     from '../../../../images/mobile_app/store/apple_store.png'
import GoogleStoreImg    from '../../../../images/mobile_app/store/google_store.png'

class MobileApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.text_sections = []
    }

    initScreenSlider(){
      let screen_data = [ ScreenImg1, ScreenImg2, ScreenImg3, ScreenImg4, ScreenImg5, ScreenImg6, ScreenImg7 ]
      this.setState({mobile_imgs: 
        <div className="ImageStickySlider">
          <ImgSlider img_class="mobile_app_img" data={screen_data}/>
        </div>
      })
    }

    componentDidMount(){
      this.initScreenSlider()

      console.log('mobile_app props', this.props)
      this.text_sections = [
        { Icon: MiniWay, text: 'Пользователь может указать начальный и конечный адрес для построения безопасного маршрута' },
        { Icon: MiniSelect,   text: 'Также в приложении есть возможность указать пользователю свою категорию для более более точного расчёта маршрута на основе анализа данных о пешеходных переходах' },
        { Icon: MiniSos,    text: 'Если пользователю необходима помощь, он может оповестить об этом других пользователей в разделе "помощь".' },
        { Icon: MiniMarkers,text: 'Также в этом разделе пользователь может видеть оповещения от других пользователей. Это позволяет оказать своевременную помощь' },
      ]
      console.log(this.text_sections)
    }

    render() {
      const apple_link = "https://apps.apple.com/ru/app/медицинский-ассистент/id1553889002"
      const google_link = "https://play.google.com/store/apps/details?id=com.temida.assistant"

      return (
        <div className="home-mobile">
          {/* Инфа + Слайдер */}
          <div className="home-mobile-content">
              <div className="home-mobile-desctiption">
                <Section 
                  id={this.props.mobile_section.section}
                  title={this.props.mobile_section.title}
                  text={this.props.mobile_section.text}
                  content={this.text_content}
                  />
                {map(this.text_sections, ({ Icon, text }) => (
                      <div key={Math.random()} className="home-mobile-content-row">
                        <img className='home-mobile-content-icon' src={Icon} alt=''/>
                        <p className='home-mobile-content-text'>{text}</p>
                      </div>
                    ))}
              </div>
              {this.state.mobile_imgs}
          </div>

          {/* Кнопки со ссылками на маркеты */}
          <div className="home-mobile-store">
            <a href={apple_link} target="_blank" rel="noreferrer" >
              <img className='home-mobile-store-icon' src={AppleStoreImg} alt=''/>
            </a>
            <a href={google_link} target="_blank" rel="noreferrer" >
              <img className='home-mobile-store-icon' src={GoogleStoreImg} alt=''/>
            </a>
          </div>

          {/* Ссылка на пользовательское соглашение под разделительной полоской */}
          {/* <div className="home-mobile-line">
            <a href="/get_licence" target="_blank" rel="noreferrer" >Пользовательское соглашение</a>
          </div> */}
        </div>
      )
    }
}

export default MobileApp;