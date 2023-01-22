import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
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
        this.setState(prev => ({
          images: page === 1 ? [...resp.hits] : [...prev.images, ...resp.hits],
        }));
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {!!images.length && <Button onLoadMore={this.handleLoadMore} />}
        <Loader />
      </>
    );
  }
}
