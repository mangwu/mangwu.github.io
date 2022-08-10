/**
 * @description 布局
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-29 17:48:33
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const { BrowserRouter: Router, Route, Link } = ReactRouterDOM;
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

/**
 * @description 布局
 * @function Layout
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function Layout(props) {
  return (
    <React.Fragment>
      <Icon />
      <Router>
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Router>
    </React.Fragment>
  );
}
