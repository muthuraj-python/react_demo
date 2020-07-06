import React from 'react'
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/product/")
            .then(res => res.json())
            .then(
              (result) => {
                console.log(result, "< =  Result");
                this.setState({
                  isLoaded: true,
                  items: result
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
        }
      )
      console.log(this.state)
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <Link to={"/prodcut_detail/${itiem.id}"}><li key={item.name}>
              {item.name} {item.price} </Link>
            </li>
          ))}
        </ul>
      );
    }
  }
}



export default User