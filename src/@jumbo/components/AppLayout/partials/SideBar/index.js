import React from 'react';
import CmtVertical from '../../../../../@coremat/CmtNavigation/Vertical';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IntlMessages from '../../../../utils/IntlMessages';
import { PostAdd } from '@material-ui/icons';

import {
  Widgets,
  EditAttributes,
  Colorize,
  Contacts,
  Group,
  ArrowForward,
  Edit,
  LibraryBooks,
  Email,
  InsertChart,
  MonetizationOn,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  perfectScrollbarSidebar: {
    height: '100%',
    transition: 'all 0.3s ease',
    '.Cmt-sidebar-fixed &, .Cmt-Drawer-container &': {
      height: 'calc(100% - 167px)',
    },
    '.Cmt-modernLayout &': {
      height: 'calc(100% - 72px)',
    },
    '.Cmt-miniLayout &': {
      height: 'calc(100% - 91px)',
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
      height: 'calc(100% - 167px)',
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const navigationMenus = [
    {
      name: <IntlMessages id={'sidebar.dashboards'} />,
      type: 'section',
      children: [
        {
          name: <IntlMessages id={'sidebar.dashboard.main'} />,
          icon: <MonetizationOn />,
          type: 'item',
          link: '/dashboard/main',
        },
        {
          name: <IntlMessages id={'sidebar.dashboard.profile'} />,
          icon: <Colorize />,
          type: 'item',
          link: '/dashboard/profile',
        },
        // {
        //   name: <IntlMessages id={'sidebar.studentIncert'} />,
        //   icon: <InsertChart />,
        //   type: 'item',
        //   link: '/routes/routes23423dsf',
        // },
        // {
        //   name: <IntlMessages id={'sidebar.studentInformation'} />,
        //   icon: <Contacts />,
        //   type: 'item',
        //   link: '/routes/routes',
        // },
        // {
        //   name: <IntlMessages id={'sidebar.university'} />,
        //   icon: <EditAttributes />,
        //   type: 'item',
        //   link: '/routes/routes23432454',
        // },
        // {
        //   name: <IntlMessages id={'sidebar.followup'} />,
        //   icon: <LibraryBooks />,
        //   type: 'item',
        //   link: '/routes/routeadsfe234',
        // },
        // {
        //   name: <IntlMessages id={'sidebar.subAgentReaport'} />,
        //   icon: <Widgets />,
        //   type: 'item',
        //   link: '/routes/rasdfadsf',
        // },
        // {
        //   name: <IntlMessages id={'sidebar.actionDateReaport'} />,
        //   icon: <Group />,
        //   type: 'item',
        //   link: '/routes/rasdfas',
        // },
        // {
        //   name: <IntlMessages id={'sidebar.directStudentReaport'} />,
        //   icon: <LibraryBooks />,
        //   type: 'item',
        //   link: '/routes/elud',
        // },
        // {
        //   name: <IntlMessages id={'sidebar.Email'} />,
        //   icon: < Email/>,
        //   type: 'item',
        //   link: '/tal/bal',
        // },
        // {
        //   name: <IntlMessages id={'sidebar.Task'} />,
        //   icon: <LibraryBooks />,
        //   type: 'item',
        //   link: 'emu/dmu',
        // },
      ],
    },
  ];

  return (
    <PerfectScrollbar className={classes.perfectScrollbarSidebar}>
      <CmtVertical menuItems={navigationMenus} />
    </PerfectScrollbar>
  );
};

export default SideBar;
