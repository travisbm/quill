//On landing page search all items bar
//start with an empty search result

var Search = React.createClass({
  getInitialState: function () {
    return {
      all_items: [],
      filtered_items: [],
      search: ''
    };
  },

// get all the items
  componentDidMount: function () {
    $.ajax({
      url: '/items',
      dataType: 'JSON',
      method: 'GET'
    }).done(function (response) {
      //change state from empty to return all items
      this.setState({
        all_items: response,
        filtered_items: response
      });
    }.bind(this));
  },

  render: function() {
    return (
      <section>
        <p>
          <input className='form-control' type='text'
            onChange={this.handleChange} value={this.state.search}
            placeholder='search items' />
        </p>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Item #</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Shipping paid</th>
                <th>Storage Location</th>
                <th>Status</th>
                <th>Source</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filtered_items.map(function (item) {
                return (
                  //linked items returned after  filters
                  <tr>
                    <td>{ item.id }</td>
                    <td><a href={'/items/' + item.id}>{ item.description } </a></td>
                    <td>{ item.quantity }</td>
                    <td>{ item.shipping }</td>
                    <td>{ item.storage_loc }</td>
                    <td>{ item.status }</td>
                    <td>{ item.source.name }</td>
                    <td><img src={ item.photo_url } /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
  );
},

  handleChange: function (event) {
    var filtered_items = this.state.all_items.filter(function (item) {
      return (item.description.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
    });
    this.setState({
      search: event.target.value,
      filtered_items: filtered_items
    });
  }
});
