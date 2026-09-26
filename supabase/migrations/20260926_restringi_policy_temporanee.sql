-- Smart Toons — misura TEMPORANEA in attesa dell'autenticazione (Fase 1 del piano).
-- Prima: policy "Gestione profili" / "Gestione toons" FOR ALL USING (true)
--        => chiunque con la chiave anon poteva anche INSERIRE e CANCELLARE righe.
-- Ora:   lettura pubblica (serve al profilo NFC) + solo UPDATE anonimo (serve ad admin/account
--        finché non c'è il login). INSERT e DELETE non sono più consentiti al ruolo anon.
-- ATTENZIONE: l'UPDATE resta aperto a tutti. Va chiuso con la Fase 1 (Supabase Auth + ruolo admin).

drop policy if exists "Gestione profili" on public.profiles;
drop policy if exists "Gestione toons" on public.toons;

create policy "Aggiornamento profili (temporaneo, senza login)"
  on public.profiles for update
  using (true) with check (true);

create policy "Aggiornamento toons (temporaneo, senza login)"
  on public.toons for update
  using (true) with check (true);
