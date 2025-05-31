# Deployment Guide für Suisse Focus

## Lokale Entwicklung

1. Dependencies installieren:
   ```bash
   pnpm install
   ```

2. Development Server starten:
   ```bash
   pnpm run dev
   ```

3. Produktions-Build erstellen:
   ```bash
   pnpm run build
   ```

## Deployment auf Hostpoint

### Option 1: Manuelles FTP-Deployment

1. Erstellen Sie einen Produktions-Build:
   ```bash
   pnpm run build
   ```

2. Verbinden Sie sich via FTP mit Ihrem Hostpoint-Hosting:
   - Host: `ftp.suissefocus.ch`
   - Benutzername: Ihr FTP-Benutzername
   - Passwort: Ihr FTP-Passwort

3. Laden Sie den gesamten Inhalt des `dist/`-Ordners in das Wurzelverzeichnis Ihrer Domain hoch.

4. Stellen Sie sicher, dass die PHP-Datei im `api/`-Ordner ausführbare Berechtigungen hat (CHMOD 755).

### Option 2: Automatisiertes Deployment mit GitHub Actions

1. Erstellen Sie ein neues GitHub Repository für das Projekt.

2. Fügen Sie die folgenden Repository Secrets hinzu:
   - `FTP_HOST`: `ftp.suissefocus.ch`
   - `FTP_USERNAME`: Ihr FTP-Benutzername
   - `FTP_PASSWORD`: Ihr FTP-Passwort

3. Erstellen Sie eine GitHub Action unter `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to Hostpoint
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '20'
         
         - name: Install pnpm
           uses: pnpm/action-setup@v2
           with:
             version: 8
         
         - name: Install dependencies
           run: pnpm install
         
         - name: Build
           run: pnpm run build
         
         - name: Deploy via FTP
           uses: SamKirkland/FTP-Deploy-Action@v4.3.4
           with:
             server: ${{ secrets.FTP_HOST }}
             username: ${{ secrets.FTP_USERNAME }}
             password: ${{ secrets.FTP_PASSWORD }}
             local-dir: dist/
             server-dir: /
   ```

## Wichtige Hinweise

1. Stellen Sie sicher, dass PHP auf Ihrem Hostpoint-Hosting aktiviert ist.

2. Überprüfen Sie nach dem Deployment:
   - Funktioniert das Kontaktformular?
   - Sind alle Assets (Bilder, CSS, JS) korrekt verlinkt?
   - Ist die sitemap.xml erreichbar?
   - Funktioniert die robots.txt korrekt?

3. Empfohlene Hostpoint-Einstellungen:
   - PHP Version: 8.1 oder höher
   - SSL/HTTPS aktivieren
   - Komprimierung (Gzip) aktivieren

## TODO-Liste

- [ ] Echte Inhalte und Bilder einpflegen
- [ ] E-Mail-Adresse in `/api/mail.php` aktualisieren
- [ ] SPAM-Schutz für das Kontaktformular implementieren
- [ ] Design-Feinschliff (Farben, Typografie, Abstände)
- [ ] Lighthouse-Audit durchführen
- [ ] Meta-Tags und SEO optimieren
- [ ] Performance-Optimierung (Bildkomprimierung, Caching)
- [ ] Analytics einrichten
- [ ] Cookie-Banner implementieren (falls nötig)
- [ ] Impressum mit korrekten Angaben erstellen 