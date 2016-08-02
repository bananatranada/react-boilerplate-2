import React, { Component } from 'react'

// import Header from './Header'
import Hero from './Hero'
import Tour from './Tour'

class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {/*<Header />*/}
        <Hero />
        <Tour
          img={'require()'}
          imgPosition="right"
          title="Powerful design prototyping tools"
          description="Get high-fidelity in under 5 minutes. Upload your design files and add animations, gestures, and transitions to transform your static screens into clickable, interactive prototypes."
          brand={'require()'}
          quote="InVision is a window into everything that's being designed at Twitter. It gets all of our best work in one place."
          person="Mike Davidson, Twitter"
          personImg={'require()'}
        />
        {/*<Tour
          img={require()}
          imgPosition="left"
          title="Seamless design communication"
          description="Simplify your feedback process by having clients, team members, and stakeholders comment directly on your designs. See new feedback for all your projects in one convenient place, or drill down by active project, specific people, or your own name."
          brand={require()}
          quote="InVision allows you to collaborate, experiment, and test much more effectively and efficiently."
          person="Andy Law, Netflix"
          personImg={require()}
        />*/}
      </div>
    )
  }
}

export default IndexPage
