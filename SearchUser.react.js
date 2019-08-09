import React from 'react';

class SearchUser extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            username : '',
            userList : [],
            items : [],
            isLoaded : false,
            showRepo : ''
        }
    }

    handleInputChange = (e) => {
        let username = e.target.value
        this.setState({
            username: username
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let url = `https://api.github.com/search/users?q=${this.state.username}`;
        fetch (url)
        .then(result => result.json())
        .then(userList => this.setState({userList, isLoaded:true, items:userList.items}));
        console.log(this.state.userList)
    }

    render() {
        if(!this.state.isLoaded){
            return (
                <div>
                    <h2>Enter a GitHub username</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="username"  ref="username" onChange={this.handleInputChange}/>
                        <button id="search">Search</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Enter a GitHub username</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="username"  ref="username" onChange={this.handleInputChange}/>
                        <button id="search">Search</button>
                    </form>
                    {
                    this.state.items.map((eachItem, index) => {
                        return  <div className="container" ><div className="card">
                            <div className="card-body" key={index}>
                            <div className="row">
                            <div className="column left" >
                            <img src={eachItem.avatar_url} alt="ProfilePicture"></img>
                            </div>
                            <div className="column middle" >
                            <p><b>Github User: </b><a href={eachItem.html_url}>{eachItem.login}</a></p>
                            </div>
                            <div className="column right" >
                            <p><b>Repositories: </b><a href={'https://github.com/'+eachItem.login+'?tab=repositories'}>Click Me!!</a></p>
                            {/* <p><b>Repositories: </b><button onClick={() => { this.setState({showRepo: 'yes'})}} >Click Me!!</button></p>
                            {this.state.showRepo === 'yes' && <ShowRepos login={eachItem.login}></ShowRepos>} */}
                            </div>
                            </div> 
                            </div>
                        </div>
                        </div>
                    })
                    }
                    
                </div>
            );
        }
    }
}

export default SearchUser;