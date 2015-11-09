var Search = React.createClass({
  getInitialState: function () {
    return {
      all_users: [],
      filtered_users: [],
      search: ''
    };
  },

  componentDidMount: function () {
    $.ajax({
      url: '/users',
      dataType: 'JSON',
      method: 'GET'
    }).done(function (response) {
      console.log(response);
      //change state from empty to return all users
      this.setState({
        all_users: response,
        filtered_users: response
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <p>
          <input className='form-control' type='text'
            onChange={this.handleChange} value={this.state.search}
            placeholder='search users' />
        </p>

        <div className="list-group-card-users">
          {this.state.filtered_users.map(function (user) {
            return (
              <a href={"/users/" + user.id} className="list-group-item list">
                <p className="list-group-item-text user-list">{ user.full_name }</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  },

  handleChange: function (event) {
    var filtered_users = this.state.all_users.filter(function (user) {
      return (user.first_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
    });
    this.setState({
      search: event.target.value,
      filtered_users: filtered_users
    });
  }
});
