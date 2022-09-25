import { useAuth } from "../../contexts/AuthContext";
import Skeleton from "react-loading-skeleton";
import * as S from "./styles";

export function Profile() {
  const { user } = useAuth();
  const hasUser = user !== null;

  return (
    <S.Container>
      {hasUser && (
        <S.Card>
          <S.ProfileHeader>
            <S.UserPhoto src={user.photoUrl === '' ? "https://i.imgur.com/7OVW0Pa.png" : user.photoUrl} />
            <S.UserInfo>
              <S.UserName>
                {user.fullName || <Skeleton height={20} width={`100%`} />}
              </S.UserName>
              <S.UserContact>{user.email} {user.phone}</S.UserContact>
            </S.UserInfo>
          </S.ProfileHeader>
          <S.ProfileContent>
            <S.SubTitle>Endereço</S.SubTitle>
            <S.UserAdress>{user.userAddress.street}, {user.userAddress.number}  {user.userAddress.complement} <br /> {user.userAddress.city} / {user.userAddress.state} <br /> {user.userAddress.zipCode}</S.UserAdress>
            <S.Link to={'/edit-profile'}>Editar Perfil</S.Link>
          </S.ProfileContent>
        </S.Card>
      )}
    </S.Container>
  );
}
