# Clerk Authentication Setup

Clerk authentication sozlandi va tayyor ishlatishga yaroqli.

## Qadamlar

### 1. Clerk Dashboard'dan Key olish

1. [Clerk Dashboard](https://dashboard.clerk.com) ga kiring
2. Yangi application yarating yoki mavjud applicationni tanlang
3. **API Keys** bo'limiga o'ting
4. **Publishable Key** ni nusxalang (shu formatda: `pk_test_...` yoki `pk_live_...`)

### 2. Environment Variable sozlash

1. Loyiha root papkasida `.env` faylini yarating (`.env.example` dan nusxalab)
2. O'z Publishable Key'ingizni qo'ying:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

### 3. Development server'ni qayta ishga tushiring

```bash
npm run dev
```

## Nima qilindi?

✅ **ClerkProvider** `main.jsx` da sozlandi  
✅ **Header komponenti** Clerk authentication bilan integratsiya qilindi  
✅ **UserButton** komponenti qo'shildi (foydalanuvchi profilini ko'rsatish va boshqarish uchun)  
✅ **useUser** hook ishlatildi (foydalanuvchi ma'lumotlarini olish uchun)  

## Qo'shimcha funksiyalar

Agar sign-in/sign-up sahifalari kerak bo'lsa, quyidagi komponentlarni qo'shishingiz mumkin:

```jsx
import { SignIn, SignUp } from '@clerk/clerk-react'

// Sign-in sahifasi
<SignIn routing="path" path="/sign-in" />

// Sign-up sahifasi  
<SignUp routing="path" path="/sign-up" />
```

Yoki protected routes qo'shish uchun:

```jsx
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'

<SignedIn>
  {/* Protected content */}
</SignedIn>
<SignedOut>
  <RedirectToSignIn />
</SignedOut>
```

## Yordam

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk React Documentation](https://clerk.com/docs/references/react/overview)

