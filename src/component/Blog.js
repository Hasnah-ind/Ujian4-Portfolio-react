import React, { Component } from 'react'

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], isloaded: false, }
    }

    componentDidMount() {
        this.getItem();

    }

    getItem() {
        const url = 'https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10'
        fetch(url, {
            method: 'GET',
            headers: { 'app-id': '601ed23fbfbb814322188b0b' }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isloaded: true,
                    items: json.data,
                });
            })
    }



    render() {
        const { items } = this.state;
        return (


            <div>
                {/* SECTION: BLOG*/}
                <div className="section-vcardbody section-home" id="section-home">
                    <div className="section-blog">
                        {/* Section title */}
                        <h2 className="section-title">Blog</h2>
                        {/* /Section title */}
                        {/* BLOG POSTS */}
                        {items.map(item => {
                            return (
                                <div className="blog-posts" >



                                    <div className="blog-item" >
                                        <div className="blog-item-wrapper" key={item.id}>
                                            {/* blog item thumbnail */}
                                            <div className="blog-item-thumb">
                                                <a className="loadPost"><img src={item.image} alt="" /></a>
                                            </div>
                                            {/* /blog item thumbnail */}
                                            {/* Blog item - infos */}
                                            <div className="blog-item-infos">
                                                {/* blog-item-title */}
                                                <div className="blog-item-title-wrapper">
                                                    <h2 className="blog-item-title title-border"><a className="loadPost">{item.owner.firstName}{item.owner.lastName}</a></h2>
                                                </div>
                                                {/* /blog-item-title */}
                                                {/* blog item - description */}
                                                <div className="blog-item-description">
                                                    <p><a className="loadPost">{item.text}</a></p>
                                                </div>
                                                {/* /blog-item-description */}
                                                {/* blog item - link */}
                                                <div className="blog-item-link">
                                                    <a href={item.link} className="btn btn-default loadPost">See More</a>
                                                </div>
                                                {/* /blog item - link */}
                                            </div>
                                            {/* /blog item - infos */}
                                        </div>
                                    </div>





                                </div>

                            )

                        })
                        }

                    </div>
                </div>
                {/* /SECTION: BLOG  */}


            </div>


        )
    }
}
