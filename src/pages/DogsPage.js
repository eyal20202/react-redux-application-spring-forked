import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchDogs } from "../actions/postsActions";
import { ListCardAnimal } from "../components/ListCardAnimal";

const DogsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchDogs('dog'));
  }, [dispatch]);

  const renderDogs = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    if(!posts) return <p>no animals</p>
    return <ListCardAnimal listAnimal={posts}/>
  };

  return (
    <section>
      <h1>Dogs</h1>
      <h2>Hi</h2>
      {renderDogs()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts && state.posts.posts && state.posts.posts.animals,
  hasErrors: state.posts.hasErrors
});

export default connect(mapStateToProps)(DogsPage);
