import RequireAuth from '../../../hooks/RequireAuth';

function Ongoing() {
  return <div>Ongoing conversations</div>;
}

export default RequireAuth(Ongoing);
