import React, { Component } from 'react';
import './Services.css';
import Svr from '../Components/service/service';

class Services extends Component {
    state = {
        Tasks: [{
                name: 'Bitcoin Ownership',
                description: 'Using our website, you can purshase, sell and do many more things with Bitcoin',
                key: '01',
                iconclass:'icon ion-md-person social-icons'
            },
            {
                name: 'Download a Wallet',
                description: 'Using our website, you can purshase, sell and do many more things with Bitcoin',
                key: '02',
                iconclass: 'icon ion-md-wallet social-icons'
            },
            {
                name: 'Use Bitcoin',
                description: 'Using our website, you can purshase, sell and do many more things with Bitcoin',
                key: '03',
                iconclass:'icon ion-logo-bitcoin social-icons'
            }
        ]
    }

    render() {

        let service = null;
        service =
            ( 
            <div className="container">
            <div className="row text-center"> {
                    this.state.Tasks.map((val, indx) => {
                        return ( <Svr key = { val.key }
                            name = { val.name }
                            description = { val.description }
                            iconclass={val.iconclass}
                            /> 
                        );
                    })
                } </div>
                </div>
            );
        return ( <div className = "App" > { service } </div>
        );

    }
}

export default Services;