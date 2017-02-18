var React=require('react');
var List=require('./List.jsx');

var ListManager=React.createClass(
    {
        getInitialState: function () {
            return {
                items: [], newText: ''
            }
        },
        handleSubmit: function (e) {
            e.preventDefault();
            var currentItems = this.state.items;
            currentItems.push(this.state.newText);
            this.setState({
                items: currentItems,
                newText: ''
            });

        },
        onChange: function (e) {
            this.setState({newText: e.target.value});


        },
        render: function () {

            var divStyle={
              marginTop: 10
            };

            var headingStyle={

            };
            if(this.props.headingColor)
            {
                headingStyle.background=this.props.headingColor;
            }


            return (<div style={divStyle} className="col-sm-4 ">
                    <div className="panel panel-primary">
                <div className="panel-heading" style={headingStyle}>
                <h4> <center> {this.props.title} </center> </h4>
                </div>
                <div className="panel-body">
                    <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="col-sm-6">
                            <input value={this.state.newText} onChange={this.onChange}/>
                    </div>
                    <div className="col-sm-2">
                    <button className="btn btn-primary"> Add</button>
                    </div>

                </form>
                        </div>
                <List itemsOfList={this.state.items}/>
                    </div>
                        </div>
                </div>
            );

        }
    }
);

module.exports=ListManager;