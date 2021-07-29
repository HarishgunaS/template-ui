import React from 'react';
import ReactDOM from 'react-dom';
import { White } from 'react-dial-knob';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


  class DialWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
    }

    render() {
      return (
        <div class="unit">
          <div class="dial">
            <White
              diameter={300}
              min={0}
              max={100}
              step={1}
              value={this.state.value}
              onValueChange={(x) => this.setState({value: x})}
            ></White>  
          </div>
        </div>
        
      )
    }
  }

  class Slider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0}
    }
    
    render() {
      return(
        <div class="unit">
          <div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={this.state.value}
              class="slider" 
              onInput={() => this.setState({value: this.value})}
            ></input>
          </div>
        </div>
      ) 
    }
  }

  class UI extends React.Component {
      render()
      {
        return (
          
          <Container sm="auto" className="my-4">
            <Row className="justify-content-md-center bg-dark p-4">
              <Col sm={2}><Slider/></Col>
              <Col sm={2}><Slider/></Col>
            </Row>
            <Row sm="auto" className="justify-content-md-center bg-dark  p-4">
              <Col className="py-4"><DialWrapper/></Col>
              <Button sm="auto" className="my-5 mx-2">First button</Button>
              <Button sm="auto" className="my-5 mx-2">Second button</Button>
              <Button sm="auto" className="my-5 mx-2">Third button</Button>
            </Row>
            <Row sm="auto" className="justify-content-md-center bg-dark  p-4">
              <Col sm="10" className="bg-light">
                <p class="scrollable">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dapibus lacus. Pellentesque id enim lacus. Nunc dapibus nisi tortor, non eleifend risus fermentum sed. Morbi eget odio at leo gravida condimentum. Cras placerat, quam at tempus hendrerit, eros neque pulvinar elit, eget commodo nibh ante a purus. Nam diam leo, scelerisque sagittis porttitor ut, faucibus sed sem. Donec vel ex ut est cursus scelerisque. Mauris ut faucibus lectus, a fringilla purus. Mauris tincidunt velit ut lectus bibendum imperdiet. Integer et ullamcorper tortor. Mauris quis bibendum augue, vitae consequat eros. In hac habitasse platea dictumst. Vivamus tincidunt urna eu lorem sodales, ac euismod neque rhoncus. Nam et dui non quam hendrerit luctus at quis nibh. Curabitur maximus, ex et eleifend elementum, mi odio ultrices urna, quis bibendum est lectus at velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                  Nam faucibus felis eget vestibulum ultrices. Vivamus non nulla commodo, rutrum nunc non, euismod justo. Nam commodo at velit non tincidunt. Cras porta erat in egestas porta. Quisque rutrum ultricies nibh, vel pulvinar dui congue ut. Donec vitae purus vel mauris facilisis maximus ut et erat. Morbi bibendum, magna luctus imperdiet mollis, ipsum dolor tincidunt nibh, et lobortis nisi libero vel justo. Nam sed ipsum ut erat interdum ullamcorper. Nunc accumsan molestie suscipit. Proin sit amet dui imperdiet, interdum urna sed, efficitur nibh. Etiam efficitur eros id justo ornare suscipit.

                  Integer nisi libero, blandit sed gravida non, rhoncus vel risus. Pellentesque sit amet dui convallis, egestas dui id, volutpat elit. Duis ultrices nisl sed mollis gravida. Duis ut eleifend risus. Sed convallis porttitor aliquet. Etiam hendrerit, risus nec tristique dictum, nulla sapien condimentum turpis, eget mollis nibh dui vitae justo. Donec a hendrerit neque. Praesent lacus justo, sagittis a lacus pretium, malesuada pharetra ipsum. Nulla egestas fermentum diam, nec commodo eros tincidunt eu. Aenean semper porta commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et lectus nec sapien imperdiet interdum. Duis sed placerat est.

                  Praesent eget mollis lectus. Duis vitae mi quam. Phasellus sed nulla nisi. Curabitur lobortis felis orci, sit amet gravida leo sollicitudin non. Fusce velit orci, finibus vitae leo ut, lacinia dignissim nisl. Fusce dapibus eu augue eget fringilla. Sed fermentum ultrices nisl, non vulputate lectus fermentum non. Duis scelerisque tempor est, ac ornare erat tempor eu. Maecenas posuere eros sed sapien euismod pretium. Curabitur nunc nunc, feugiat quis dui sit amet, efficitur interdum leo. Ut auctor et felis ut ornare. Praesent in ullamcorper nisl, ut dignissim erat.

                  Quisque eros risus, volutpat a turpis id, convallis rhoncus ipsum. Donec sed sapien mi. Nunc ullamcorper nisi eu lacus fermentum, quis suscipit metus commodo. Sed luctus gravida tellus ac feugiat. Morbi libero tortor, iaculis vel rhoncus vitae, auctor quis nisi. Etiam odio leo, luctus eu tempor in, finibus vel lacus. Fusce id mattis erat. Etiam eu nulla orci. Ut quis luctus sem, non tincidunt arcu. Cras blandit, tellus sed laoreet dapibus, lorem arcu vehicula metus, eu dictum elit nibh finibus eros. Donec vel maximus ligula, id varius odio. Morbi semper dapibus elit sed mollis. Etiam pretium tellus sit amet arcu eleifend, a mollis felis mollis. In lacinia enim non ipsum suscipit sollicitudin. Morbi et nunc ornare, semper sem non, cursus lacus.

                  Nullam aliquam justo leo, quis hendrerit lectus condimentum quis. Donec at nisl sit amet arcu aliquam congue. Proin arcu ante, posuere a faucibus non, pharetra quis sem. Phasellus pellentesque mi metus, eget commodo libero cursus ut. Duis dictum maximus felis vitae tristique. Phasellus venenatis diam et sapien varius pellentesque. Ut vel aliquet neque, ut commodo lectus. Vivamus quis nunc sit amet mauris vulputate convallis. In hac habitasse platea dictumst. Integer tempor ornare erat, egestas posuere ex elementum eget. Aliquam elit orci, lacinia ut libero eu, hendrerit tincidunt elit. Aliquam congue mollis purus. Mauris at porttitor libero. Curabitur in purus enim. Sed eget aliquet velit, in ultricies augue. Nullam nisi nulla, facilisis non ullamcorper quis, pellentesque eu nunc.

                  Donec ligula neque, feugiat vel ipsum nec, varius tempus mauris. Sed sed eleifend turpis, at dictum velit. Integer pulvinar leo eu purus luctus, eget auctor nisl convallis. Sed eget dui convallis nunc lobortis maximus vitae sed tellus. Praesent ornare ligula quis tellus lacinia, a sodales erat semper. Etiam euismod tincidunt ullamcorper. Ut sodales lorem vitae purus faucibus iaculis. Integer vitae justo pretium eros vulputate vehicula sollicitudin ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce metus ex, gravida vitae odio vel, condimentum viverra nisi. Aliquam euismod tortor eget elit efficitur varius. Sed consequat, tellus non aliquet suscipit, erat ligula cursus mauris, quis ullamcorper nulla dui sit amet risus. Praesent interdum malesuada orci, in consectetur ligula elementum vitae.

                  Sed maximus mauris id elit convallis, a accumsan orci faucibus. Nullam molestie, est eu faucibus pulvinar, diam diam condimentum nulla, nec tempor lorem velit vitae tellus. Aenean feugiat, metus rhoncus facilisis hendrerit, diam erat placerat nisl, id sagittis ante neque nec ante. Nulla eu dolor et erat placerat congue. Nam eget lorem felis. Cras metus turpis, ullamcorper eu tristique pharetra, sodales et erat. Nullam pulvinar arcu bibendum diam imperdiet, sit amet molestie arcu dignissim. Suspendisse eleifend tristique augue, nec sodales mauris. Aliquam quis libero vitae nunc imperdiet posuere.

                  Donec turpis purus, egestas at accumsan eu, tristique vitae odio. Aliquam blandit dolor et tempor pharetra. Fusce ut lacus placerat, efficitur lacus in, interdum dui. Vestibulum non sollicitudin ligula. Fusce bibendum lorem condimentum felis consequat, sollicitudin consectetur mauris imperdiet. Sed semper pulvinar lectus rutrum tempus. Nullam bibendum felis mi, ut porta risus pharetra dignissim. Nulla sollicitudin, massa quis tincidunt tristique, lacus arcu scelerisque mi, non dapibus dui libero et enim. Vivamus scelerisque fringilla sem, vitae porta elit semper in.

                  Sed molestie vulputate nunc, id pretium lorem. Aliquam arcu nisi, scelerisque in metus a, pellentesque imperdiet risus. Nam faucibus tortor justo, id cursus elit scelerisque aliquam. Fusce bibendum ante volutpat, interdum nisl ac, tristique neque. Integer dictum ut justo eget aliquet. Cras ullamcorper orci ex, sed volutpat ante commodo ut. Phasellus a consectetur libero. Pellentesque consectetur iaculis finibus. Donec consequat odio nisi, at viverra nisi mattis sit amet. Cras ut imperdiet felis, sed egestas ex. Mauris euismod et ex vulputate venenatis. 
                </p>                
              </Col>
              
            </Row>
          </Container>
        )
      }
  }




  // ========================================
  
  ReactDOM.render(
    <UI/>,
    document.getElementById('root')
  );
  
