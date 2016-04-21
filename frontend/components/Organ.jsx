var React = require('react');
var OrganKey = require('./OrganKey');

var Organ = React.createClass({

  render: function() {
    return (
      <div className="organ">
        <OrganKey className='white c' keyName='C1'/>
        <OrganKey className='black cs' keyName='C_sharp'/>
        <OrganKey className='white d' keyName='D'/>
        <OrganKey className='black ds' keyName='D_sharp'/>
        <OrganKey className='white e' keyName='E'/>
        <OrganKey className='white f' keyName='F'/>
        <OrganKey className='black fs' keyName='F_sharp'/>
        <OrganKey className='white g' keyName='G'/>
        <OrganKey className='black gs' keyName='G_sharp'/>
        <OrganKey className='white a' keyName='A'/>
        <OrganKey className='black as' keyName='A_sharp'/>
        <OrganKey className='white b' keyName='B'/>
        <OrganKey className='white c' keyName='C2'/>
      </div>
    );
  }
});

module.exports = Organ;
