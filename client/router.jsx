import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
import Admin from '../imports/ui/Admin.jsx';
import {mount} from 'react-mounter';


/*Meteor.startup(() => {
  //render(<App />, document.getElementById('render-target'));
}); */

  const MainLayout = ({content}) => (
      <div>
        <main>
          {content}
        </main>
      </div>
  );


FlowRouter.route('/admin',{
	action(){
		mount(MainLayout, {
		  content: <Admin />
		});
	}
})

FlowRouter.route('/',{
	action(){
		mount(MainLayout, {
		  content: <App />
		});
	}
})





