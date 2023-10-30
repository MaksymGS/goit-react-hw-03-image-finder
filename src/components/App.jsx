import { fetchImages } from 'api';
import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    imageItems: [],
    loading: false,
    error: false,
    searchQuery: '',
    page: 1,
    loadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      try {
        this.setState({ loading: true, error: false });
        const resp = await fetchImages(this.state.searchQuery, this.state.page);
        this.setState({
          imageItems: resp.hits,
          loadMore: 1 < Math.ceil(resp.totalHits / 12),
        });
        console.log(this.state.imageItems);
        console.log(resp);
        console.log(this.state.loadMore);
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
      return;
    }
    if (this.state.page !== prevState.page) {
      try {
        this.setState({ loading: true, error: false });
        const resp = await fetchImages(this.state.searchQuery, this.state.page);
        console.log(resp.totalHits);
        this.setState({
          imageItems: [...prevState.imageItems, ...resp.hits],
          loadMore: this.state.page < Math.ceil(resp.totalHits / 12),
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  changeQuery = values => {
    console.log(values);
    this.setState({
      searchQuery: values.searchQuery,
      page: 1,
    });
  };

  increasePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, imageItems, loadMore } = this.state;
    return (
      <>
        <Searchbar onChangeQuery={this.changeQuery} />
        {imageItems.length > 0 && <ImageGallery images={imageItems} />}
        {loadMore && !loading && <Button onLoadMore={this.increasePage} />}
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'space-around' }}
          wrapperClassName=""
          visible={loading}
        />
      </>
    );
  }
}
