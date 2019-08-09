import React from 'react';

class SearchRepo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            repo : '',
            repoList : [],
            items: [],
            isLoaded: false
        }
    }

    handleInputChange = (e) => {
        let repo = e.target.value
        this.setState({
            repo
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let url = `https://api.github.com/search/repositories?q=name:${this.state.repo}`
        fetch (url)
        .then(result => result.json())
        .then(repoList => this.setState({repoList,items:repoList.items,isLoaded:true}));
        console.log(this.state.repoList);
        console.log(this.state.items[2])
    }

    render() {
        if(!this.state.isLoaded){
        return (
            <div>
                <h2>Enter a GitHub repository</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="repo"  ref="repo" onChange={this.handleInputChange}/>
                    <button id="search">Search</button>
                </form>
            </div>
        );}
        else {
            return (
            <div>
                <h2>Enter a GitHub repository</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="repo"  ref="repo" onChange={this.handleInputChange}/>
                    <button id="search">Search</button>
                </form>
                {
                this.state.items.map((eachItem, index) => {
                    return <div className="container" key={index}>
                        <div className="card" key={index}>
                            <div className="card-body" key={index}>
                                <div className="row">
                                    <div className="column left" >
                                        <p><b>Repository Name: </b><a href={eachItem.html_url}>{eachItem.name}</a></p>
                                    </div>
                                    <div className="column middle" >
                                        <p><b>Owner Name: </b><a href={eachItem.owner.html_url}>{eachItem.owner.login}</a></p>
                                    </div>
                                    <div className="column right">
                                        <img src={eachItem.owner.avatar_url} alt="profilePic"></img>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
            )

        }
    }
}

export default SearchRepo;