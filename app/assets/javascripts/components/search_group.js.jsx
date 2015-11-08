var Search_Groups = React.createClass({
  getInitialState: function () {
    return {
      all_groups: [],
      filtered_groups: [],
      search: ''
    };
  },

  componentDidMount: function () {
    $.ajax({
      url: '/groups',
      dataType: 'JSON',
      method: 'GET'
    }).done(function (response) {
      //change state from empty to return all groups
      this.setState({
        all_groups: response,
        filtered_groups: response
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <p>
          <input className='form-control' type='text'
            onChange={this.handleChange} value={this.state.search}
            placeholder='search groups' />
        </p>

        <div className="list-group-card-groups">
          {this.state.filtered_groups.map(function (group) {
            return (
              <a href={"/groups/" + group.id} className="list-group-item">
                <p className="list-group-item-text group-list">{ group.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  },

  handleChange: function (event) {
    var filtered_groups = this.state.all_groups.filter(function (group) {
      return (group.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
    });
    this.setState({
      search: event.target.value,
      filtered_groups: filtered_groups
    });
  }
});
