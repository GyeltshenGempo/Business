import React, {useContext, useEffect} from 'react';
import {useSnackbar} from 'notistack';
import {useHistory, useLocation} from 'react-router-dom';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {DispatchContext, StateContext} from '../../../store';
import {fetchIncludedObjectList} from "../../../shared/functions/IncludedBinding";
import {acceptConfirmation} from "../../../services/AuthServices";

export default function EmailConfirmation() {
  const history = useHistory();
  const snackbar = useSnackbar();
  const dispatch = useContext(DispatchContext);
  const location = useLocation();
  const params = new URLSearchParams(location?.search);
  const token = params.get('confirmation_token');
  const {user} = useContext(StateContext);


  useEffect(() => {
    setProps(snackbar);
    acceptConfirmation({confirmation_token: token}, dispatch).then(response => {
        if (user?.role_ids?.[0]?.name === 'Admin') {
          history.push('/dashboard');
        } else {
          history.push('/');
        }
      Notify('User confirmed successfully', 'success');
    }).catch(err => {
      Notify(err, 'error');
    });
  }, []);

  return (
    <React.Fragment>

    </React.Fragment>
  );
}
