import React, {useCallback, useEffect, useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

const Sidebar = ({location}) => {
  const [state, setState] = useState({
    basicUiMenuOpen: false,
    formElementsMenuOpen: false,
    tablesMenuOpen: false,
    iconsMenuOpen: false,
    chartsMenuOpen: false,
    userPagesMenuOpen: false,
    errorPagesMenuOpen: false,
    generalPagesMenuOpen: false
  });

  const toggleMenuState = (menuState) => {
    if (state[menuState]) {
      setState(state => ({...state, [menuState]: false}));
    } else if(Object.keys(state).length === 0) {
      setState(state => ({...state, [menuState] : true}));
    } else {
      Object.keys(state).forEach(i => {
        setState(state => ({...state, [i]: false}));
      });
      setState(state => ({...state, [menuState]: true}));
    }
  }

  useEffect(() => {
    onRouteChanged();
  }, [location]);

  const onRouteChanged = useCallback(() => {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(state).forEach(i => {
      setState(state => ({...state, [i]: false}));
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (isPathActive(obj.path)) {
        setState(state => ({...state, [obj.state]: true}));
      }
    }));
  }, [state]);
  const isPathActive = useCallback((path) => {
    return location.pathname.startsWith(path);
  }, [location]);

  useEffect(() => {
    onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }, []);

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
            <div className="nav-profile-image">
              <img src={ require("../../assets/images/faces/face1.jpg") } alt="profile" />
              <span className="login-status online"></span> {/* change to offline or busy as needed */}
            </div>
            <div className="nav-profile-text">
              <span className="font-weight-bold mb-2"><Trans>David Grey. H</Trans></span>
              <span className="text-secondary text-small"><Trans>Project Manager</Trans></span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li className={ isPathActive('/memberInfo') ? 'nav-item active' : 'nav-item' }>
          <Link className="nav-link" to="/memberInfo">
            <span className="menu-title"><Trans>회원 정보</Trans></span>
            <i className="mdi mdi-account-box menu-icon"></i>
          </Link>
        </li>
        <li className={ isPathActive('/groupInfo') ? 'nav-item active' : 'nav-item' }>
          <Link className="nav-link" to="/groupInfo">
            <span className="menu-title"><Trans>셀 정보</Trans></span>
            <i className="mdi mdi-account-multiple menu-icon"></i>
          </Link>
        </li>
        <li className={ isPathActive('/attendance') ? 'nav-item active' : 'nav-item' }>
          <Link className="nav-link" to="/attendance">
            <span className="menu-title"><Trans>출석체크</Trans></span>
            <i className="mdi mdi-account-multiple menu-icon"></i>
          </Link>
        </li>
        {/*<li className={ isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>*/}
        {/*  <div className={ state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">*/}
        {/*    <span className="menu-title"><Trans>Basic UI Elements</Trans></span>*/}
        {/*    <i className="menu-arrow"></i>*/}
        {/*    <i className="mdi mdi-crosshairs-gps menu-icon"></i>*/}
        {/*  </div>*/}
        {/*  <Collapse in={ state.basicUiMenuOpen }>*/}
        {/*    <ul className="nav flex-column sub-menu">*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>Buttons</Trans></Link></li>*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>Dropdowns</Trans></Link></li>*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography"><Trans>Typography</Trans></Link></li>*/}
        {/*    </ul>*/}
        {/*  </Collapse>*/}
        {/*</li>*/}
        {/*<li className={ isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>*/}
        {/*  <div className={ state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">*/}
        {/*    <span className="menu-title"><Trans>Form Elements</Trans></span>*/}
        {/*    <i className="menu-arrow"></i>*/}
        {/*    <i className="mdi mdi-format-list-bulleted menu-icon"></i>*/}
        {/*  </div>*/}
        {/*  <Collapse in={ state.formElementsMenuOpen }>*/}
        {/*    <ul className="nav flex-column sub-menu">*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/basic-elements"><Trans>Basic Elements</Trans></Link></li>*/}
        {/*    </ul>*/}
        {/*  </Collapse>*/}
        {/*</li>*/}
        {/*<li className={ isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>*/}
        {/*  <div className={ state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('tablesMenuOpen') } data-toggle="collapse">*/}
        {/*    <span className="menu-title"><Trans>Tables</Trans></span>*/}
        {/*    <i className="menu-arrow"></i>*/}
        {/*    <i className="mdi mdi-table-large menu-icon"></i>*/}
        {/*  </div>*/}
        {/*  <Collapse in={ state.tablesMenuOpen }>*/}
        {/*    <ul className="nav flex-column sub-menu">*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Basic Table</Trans></Link></li>*/}
        {/*    </ul>*/}
        {/*  </Collapse>*/}
        {/*</li>*/}
        {/*<li className={ isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>*/}
        {/*  <div className={ state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('iconsMenuOpen') } data-toggle="collapse">*/}
        {/*    <span className="menu-title"><Trans>Icons</Trans></span>*/}
        {/*    <i className="menu-arrow"></i>*/}
        {/*    <i className="mdi mdi-contacts menu-icon"></i>*/}
        {/*  </div>*/}
        {/*  <Collapse in={ state.iconsMenuOpen }>*/}
        {/*    <ul className="nav flex-column sub-menu">*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link' } to="/icons/mdi"><Trans>Material</Trans></Link></li>*/}
        {/*    </ul>*/}
        {/*  </Collapse>*/}
        {/*</li>*/}
        {/*<li className={ isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>*/}
        {/*  <div className={ state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('chartsMenuOpen') } data-toggle="collapse">*/}
        {/*    <span className="menu-title"><Trans>Charts</Trans></span>*/}
        {/*    <i className="menu-arrow"></i>*/}
        {/*    <i className="mdi mdi-chart-bar menu-icon"></i>*/}
        {/*  </div>*/}
        {/*  <Collapse in={ state.chartsMenuOpen }>*/}
        {/*    <ul className="nav flex-column sub-menu">*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } to="/charts/chart-js"><Trans>Chart Js</Trans></Link></li>*/}
        {/*    </ul>*/}
        {/*  </Collapse>*/}
        {/*</li>*/}
        {/*<li className={ isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>*/}
        {/*  <div className={ state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">*/}
        {/*    <span className="menu-title"><Trans>User Pages</Trans></span>*/}
        {/*    <i className="menu-arrow"></i>*/}
        {/*    <i className="mdi mdi-lock menu-icon"></i>*/}
        {/*  </div>*/}
        {/*  <Collapse in={ state.userPagesMenuOpen }>*/}
        {/*    <ul className="nav flex-column sub-menu">*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1"><Trans>Login</Trans></Link></li>*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1"><Trans>Register</Trans></Link></li>*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/user-pages/lockscreen') ? 'nav-link active' : 'nav-link' } to="/user-pages/lockscreen"><Trans>Lockscreen</Trans></Link></li>*/}
        {/*    </ul>*/}
        {/*  </Collapse>*/}
        {/*</li>*/}
        {/*<li className={ isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>*/}
        {/*  <div className={ state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">*/}
        {/*    <span className="menu-title"><Trans>Error Pages</Trans></span>*/}
        {/*    <i className="menu-arrow"></i>*/}
        {/*    <i className="mdi mdi-security menu-icon"></i>*/}
        {/*  </div>*/}
        {/*  <Collapse in={ state.errorPagesMenuOpen }>*/}
        {/*    <ul className="nav flex-column sub-menu">*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-404">404</Link></li>*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-500">500</Link></li>*/}
        {/*    </ul>*/}
        {/*  </Collapse>*/}
        {/*</li>*/}
        {/*<li className={ isPathActive('/general-pages') ? 'nav-item active' : 'nav-item' }>*/}
        {/*  <div className={ state.generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('generalPagesMenuOpen') } data-toggle="collapse">*/}
        {/*    <span className="menu-title"><Trans>General Pages</Trans></span>*/}
        {/*    <i className="menu-arrow"></i>*/}
        {/*    <i className="mdi mdi-medical-bag menu-icon"></i>*/}
        {/*  </div>*/}
        {/*  <Collapse in={ state.generalPagesMenuOpen }>*/}
        {/*    <ul className="nav flex-column sub-menu">*/}
        {/*      <li className="nav-item"> <Link className={ isPathActive('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/blank-page"><Trans>Blank Page</Trans></Link></li>*/}
        {/*    </ul>*/}
        {/*  </Collapse>*/}
        {/*</li>*/}
        {/*<li className="nav-item">*/}
        {/*  <a className="nav-link" href="http://bootstrapdash.com/demo/purple-react-free/documentation/documentation.html" rel="noopener noreferrer" target="_blank">*/}
        {/*    <span className="menu-title"><Trans>Documentation</Trans></span>*/}
        {/*    <i className="mdi mdi-file-document-box menu-icon"></i>*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}

export default withRouter(Sidebar);