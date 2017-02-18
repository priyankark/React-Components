var React=require('react');

var ListItem=require('./ListItem.jsx');

var List=React.createClass(
    {
        render:function(){

            function createElement(text,key)
            {
                return <ListItem text={text} key={key+text} />
            }

          return <ul>{this.props.itemsOfList.map(createElement)} </ul>
        }
    }
)



module.exports=List;
