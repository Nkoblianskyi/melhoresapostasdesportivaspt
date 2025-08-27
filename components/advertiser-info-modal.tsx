"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">Informações do Anunciante</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
            <p className="text-sm text-gray-700">
              <strong>MelhoresApostasDesportivasPT.com</strong> é um website de marketing de afiliados. Ganhamos
              comissões quando se regista com operadores de apostas através dos nossos links.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              ✓ Trabalhamos apenas com operadores licenciados
              <br />✓ As nossas análises permanecem independentes
              <br />✓ Priorizamos a segurança e o jogo responsável
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <p className="text-xs text-gray-500">
              O jogo envolve risco. Jogue responsavelmente e procure ajuda se necessário.
            </p>
          </div>

          <Button onClick={onClose} className="w-full bg-green-600 hover:bg-green-700">
            Compreendido
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
