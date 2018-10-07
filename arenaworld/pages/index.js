import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import web3 from '../ethereum/web3';

const title = {
  padding: '10px',
  fontSize: '30px'
}

const viewDetail = {
  paddingLeft: '10px'
}



class AthleteIndex extends Component {
  static async getInitialProps() {
    let athletes = await factory.methods.getDeployedCampaigns().call();

    athletes = athletes.map( address => {
      return {
        address,
        name: 'Marshawn Linn Jr',
        team: 'Team A',
        age: 17,
        wins: 90,
        losses: 2,
        imgSrc: 'http://cdn.kaltura.com/p/923261/thumbnail/entry_id/1_z8z2b7bm/quality/80/width/0/height/435/src_x/0/src_y/126.766842105263/src_w/1600/src_h/610.526315789474/vid_sec/0'
      }
    });

    return { athletes };
  }

  renderAthletes() {
    const items = this.props.athletes.map(({address, name, age, team, wins, losses, imgSrc}, i) => {
      const extra = (
        <a>
          <span class="mdi mdi-ethereum">16.9</span>

        </a>
      );

      return {
        header: name,
        meta: address,
        image: imgSrc,
        extra:  Math.random(9) + ' Ethers',
        description: (
          [
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>,
            <div>
              <h4>
              <Link route={`/athletes/${address}`}>
                <a>View Details</a>
              </Link>
              </h4>
            </div>
        ]
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h1 style={title}>Athletes</h1>

          <Link route="/athletes/new">
            <a>
              <Button
                floated="right"
                content="Add Athlete"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderAthletes()}
        </div>
      </Layout>
    );
  }
}

export default AthleteIndex;
