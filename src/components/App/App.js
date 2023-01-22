import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { fetchImages } from 'services/pixabayApi';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page).then(resp => {
        this.setState(prev => ({ images: [...prev.images, ...resp.hits] }));
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
      </>
    );
  }
}
