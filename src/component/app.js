import React from 'react';
import Button from './Button';
import Img from './Img';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.autoPlay()
  }
  state = {
    src : 'http://mirpozitiva.ru/uploads/posts/2016-09/1474011210_15.jpg',
    index : 0
  }
  autoPlay(){
    setInterval(() =>{
      this.onClick()
    }, 2000)
  }
  onClick(){
    console.log(this.state.index);

    let imgs = ['http://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg', 'https://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/02-funny-cat-wallpapercat-wallpaper.jpg', 'http://mirpozitiva.ru/uploads/posts/2016-09/1474011210_15.jpg'];
    this.setState({
      src : imgs[this.state.index]
    });
    if(this.state.index < 2){
    this.setState({
      index : this.state.index+1
    });
    }else {
      this.setState({
        index : 0
      });
    }

  }

  render() {
    return (
      <div>
        <Img src={this.state.src}/>
        <Button onClick={this.onClick}/>
      </div>
    );
  }
}
