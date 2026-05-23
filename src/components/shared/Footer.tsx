export default function Footer() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center py-2 text-foreground-subtle">
            <span>Pas de cookies ici</span>
            <span className="hidden sm:inline-block mx-2">|</span>
            <span>Tous droits réservés</span>
            <span className="hidden sm:inline-block mx-2">-</span>
            <span>Cyril Fischer</span>
        </div>
    );
}
